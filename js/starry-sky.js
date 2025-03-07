/**
 * 星空效果 JavaScript
 * 创建闪烁的星星和流星效果
 */

document.addEventListener('DOMContentLoaded', () => {
    // 获取星空容器
    const starrySky = document.getElementById('starry-sky');
    
    // 星星数量
    const starCount = 200;
    
    // 创建星星
    for (let i = 0; i < starCount; i++) {
        createStar(starrySky);
    }
});

/**
 * 创建单个星星
 * @param {HTMLElement} container - 星星的容器元素
 */
function createStar(container) {
    // 创建星星元素
    const star = document.createElement('div');
    star.classList.add('star');
    
    // 随机位置
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // 随机大小 (0.5px - 3px)
    const size = Math.random() * 2.5 + 0.5;
    
    // 随机透明度 (0.1 - 0.9)
    const opacity = Math.random() * 0.8 + 0.1;
    
    // 随机闪烁持续时间 (3s - 8s)
    const duration = Math.random() * 5 + 3;
    
    // 随机延迟 (0s - 5s)
    const delay = Math.random() * 5;
    
    // 设置星星样式
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--star-opacity', opacity);
    star.style.setProperty('--twinkle-duration', `${duration}s`);
    star.style.setProperty('--twinkle-delay', `${delay}s`);
    
    // 添加星星到容器
    container.appendChild(star);
    
    // 为较大的星星添加光晕效果
    if (size > 2) {
        star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, ${opacity})`;
    }
} 