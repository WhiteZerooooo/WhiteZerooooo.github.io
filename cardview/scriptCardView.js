document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dataArray = Object.values(data);

            // 指定特定的ID数组，你可以根据实际情况调整这些ID
            const prioritizedIds = [200454, 200435, 200455, 200456, 200457]; // 假设要优先显示ID为200002和200001的卡片
            const qualityIds = {
                "0": "？",
                "1": "M",
                "2": "R",
                "3": "SR",
                "4": "UR",
                "5": "SP"
            };
            const careers = {
                "0": "？",
                "1": "防御系",
                "2": "力量系",
                "3": "魔法系",
                "4": "辅助系"
            };

            // 将特定ID的卡片移动到数组前面
            const sortedData = dataArray.sort((a, b) => {
                if (prioritizedIds.includes(a.id) && prioritizedIds.includes(b.id)) {
                    return prioritizedIds.indexOf(a.id) - prioritizedIds.indexOf(b.id);
                } else if (prioritizedIds.includes(a.id)) {
                    return -1;
                } else if (prioritizedIds.includes(b.id)) {
                    return 1;
                } else {
                    return b.id - a.id; // 其他卡片按照ID倒序排序
                }
            });

            const cardContainer = document.getElementById('card-container');
            sortedData.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('img');
                image.classList.add('card-image');
                image.src = `https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/card/card_draw_${item.id}.png`; // 替换为实际图片路径
                image.alt = item.name;
                image.onerror = function () {
                    this.src = 'https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/card/card_draw_200001.png'; // 替换为默认图片路径或显示 "No Image" 的图像路径
                    this.alt = 'No Image';
                };

                card.addEventListener('click', function () {
                    // 点击时切换图片源
                    image.src = image.src.includes(`https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/card/card_draw_${item.id}.png`) ? `https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/card/card_draw_${item.id}_5.png` : `https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/card/card_draw_${item.id}.png`;
                });

                const content = document.createElement('div');
                content.classList.add('card-content');

                const icon = document.createElement('img');
                icon.classList.add('card-icon');
                icon.src = `https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/head/card_icon_${item.id}.png`; // 替换为实际图标路径
                icon.alt = `${item.name} icon`;
                icon.onerror = function () {
                    this.src = 'https://gcore.jsdelivr.net/gh/WhiteZerooooo/FoodFantasyResource@latest/assets/head/card_icon_200001.png'; // 替换为默认图标路径或显示 "No Icon" 的图标路径
                    this.alt = 'No Icon';
                };

                const title = document.createElement('div');
                title.classList.add('card-title');
                title.textContent = item.name;

                const id = document.createElement('div');
                id.classList.add('card-id');
                id.textContent = `ID: ${item.id}`;

                const description = document.createElement('div');
                description.classList.add('card-description');
                //   description.textContent = item.descr;
                description.textContent = `${qualityIds[item.qualityId]} | ${careers[item.career]}`;

                content.appendChild(icon);
                content.appendChild(title);
                content.appendChild(id);
                content.appendChild(description);

                card.appendChild(content);
                card.appendChild(image);
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
