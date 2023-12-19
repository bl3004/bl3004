const target = document.querySelector(".shell");

var imageCount = 50;

var usedImages = [];

fetch(
    "https://bl3004.github.io/bl3004/projects/Project-03/Image3"
)
    .then((res) => {
        return res.blob();
    })
    .then((data) => {
        // 循环生成指定数量的图片卡片 
        for (i = 0; i < imageCount; i++) {
            // 生成图片卡片 
            var randNum = getRandomImageIndex();
            createImage(data, randNum);
            // 随机散布卡片 
            scatterCards();
        }
        // 逐个显示卡片 
        show(0);
    })
    .catch((err) => {
        console.log(err);
    });
// 从img文件夹中随机选择未使用的图片名称 
function getRandomImageIndex() {
    var randNum = Math.ceil(Math.random() * imageCount);
    while (usedImages.includes(randNum)) {
        randNum = Math.ceil(Math.random() * imageCount);
    }
    usedImages.push(randNum);
    return randNum;
}
// 根据图片数据和随机数生成图片卡片 
function createImage(data, randNum) {
    target.innerHTML += `<div class="card"> 
        <img src="https://bl3004.github.io/bl3004/projects/Project-03/Image3/${padNumber(randNum)}.jpg" class="image"> 
        <div class="color-codes"><h1>${padNumber(randNum)}</h1></div> 
        </div>`;
}
// 将数字转换为两位数格式（例如：1 -> 01） 
function padNumber(number) {
    return number.toString().padStart(2, '0');
}
// 逐个显示卡片 
function show(i) {
    var cards = document.querySelectorAll(".card");
    if (i < imageCount) {
        setTimeout(function () {
            cards[i].classList.add("active");
            i++;
            show(i);
        }, 100);
    }
}
// 随机散布卡片 
function scatterCards() {
    $(".card")
        .each(function () {
            // 随机旋转角度 
            var rNum = Math.random() * 50 - 2;
            rNum *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            // 随机位置偏移量 
            var x = Math.random() * 50 - 5;
            var y = Math.random() * 50 - 5;
            x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            y *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            // 设置卡片的旋转角度和位置 
            $(this).css({
                "-webkit-transform": "rotate(" + rNum + "2deg)",
                "-moz-transform": "rotate(" + rNum + "2deg)",
                top: x,
                left: y
            });
        })
        // 设置卡片可拖动，并形成堆叠效果 
        .draggable({
            stack: ".card",
            stop: function (event, ui) {
                // 获取鼠标甩开时的位置 
                var originalPosition = ui.originalPosition;
                // 获取当前卡片的位置 
                var currentPosition = ui.position;
                // 计算位置的差值 
                var diffX = currentPosition.left - originalPosition.left;
                var diffY = currentPosition.top - originalPosition.top;
                // 动画效果，让卡片飘动一段距离，方向与鼠标甩开的方向一致 
                $(this).animate({
                    top: "+=" + diffY + "px",
                    left: "+=" + diffX + "px"
                }, 300);
            }
        });
}


function resizeShell() {
    const shell = document.querySelector('.shell');
    shell.style.width = window.innerWidth + 'px';
    shell.style.height = window.innerHeight + 'px';
}

// 调整画布大小并监听窗口大小变化
resizeShell();
window.addEventListener('resize', resizeShell);



function refreshPage() {
    location.reload(true); // 使用location.reload(true)来强制刷新页面
}