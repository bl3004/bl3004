 // 这段JavaScript代码的作用是实现一个图片轮播效果。首先，通过document.getElementsByClassName('item')获取到所有具有item类名的元素，并将它们存储在items变量中。
    // 然后，通过一个循环遍历每个item元素。在循环中，首先获取当前的item元素，然后通过getElementsByClassName方法获取到该item下的frame、front、left和right元素，并将它们分别存储在frame、frontBox、leftBox和rightBox变量中。
    // 接下来，通过设置frontBox、leftBox和rightBox的style.backgroundImage属性，将背景图片设置为'url(./img/' + (i + 1).toString().padStart(2, '0') + '.jpg)'，其中(i + 1).toString().padStart(2, '0')表示将循环变量i加1后转换为字符串，并在前面补0，以保证图片的文件名格式正确。
    // 接着，定义了一个立即执行函数，并在函数内部进行了一些操作。首先，通过document.getElementsByClassName('shell')[0]获取到具有shell类名的元素，并将其存储在shell变量中。然后，通过shell.getElementsByClassName方法获取到该shell元素下的shell_slider、item、prev和next元素，并将它们分别存储在slider、items、prevBtn和nextBtn变量中。
    // 接下来，定义了一些变量，包括width、height、totalWidth、margin、currIndex、interval和intervalTime。width和height分别表示每个item的宽度和高度，totalWidth表示所有item的总宽度，margin表示item的外边距，currIndex表示当前显示的item的索引，interval表示定时器的ID，intervalTime表示定时器的时间间隔。
    // 然后，定义了init函数，该函数用于初始化一些操作。在该函数中，首先调用resize函数调整大小，然后调用move函数将显示的item移动到中间位置，接着调用bindEvents函数绑定事件，最后调用timer函数启动定时器。
    // 接着，定义了resize函数，该函数用于在窗口大小变化时调整大小。在该函数中，首先计算出新的width和height，然后根据计算结果设置slider的宽度，以及每个item的宽度和高度。
    // 接下来，定义了bindEvents函数，该函数用于绑定事件。在该函数中，首先绑定了窗口大小变化时调用resize函数的事件，然后绑定了点击prev按钮和next按钮时调用prev函数和next函数的事件。
    // 最后，在立即执行函数的末尾，调用了init函数来初始化页面，并定义了move、timer、prev和next函数。其中，move函数用于移动shell到指定的item，timer函数用于启动定时器，prev函数用于切换到上一个item，next函数用于切换到下一个item。

    // 获取所有的item元素
    var items = document.getElementsByClassName('item');
    // 循环遍历每个item
    for (var i = 0; i < items.length; i++) {
        // 获取当前item
        var item = items[i];
        var frame = item.getElementsByClassName('frame')[0];
        var frontBox = frame.getElementsByClassName('front')[0];
        var leftBox = frame.getElementsByClassName('left')[0];
        var rightBox = frame.getElementsByClassName('right')[0];
        // 设置背景图片
        frontBox.style.backgroundImage = 'url(./Image/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
        leftBox.style.backgroundImage = 'url(./Image/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
        rightBox.style.backgroundImage = 'url(./Image/' + (i + 1).toString().padStart(2, '0') + '.jpg)';
    }
    (function () {
        "use strict";
        var shell = document.getElementsByClassName('shell')[0];
        var slider = shell.getElementsByClassName('shell_slider')[0];
        var items = shell.getElementsByClassName('item');
        var prevBtn = shell.getElementsByClassName('prev')[0];
        var nextBtn = shell.getElementsByClassName('next')[0];
        // 定义变量
        var width, height, totalWidth, margin = 20,
            currIndex = 0,
            interval, intervalTime = 3000;
        function init() {
            // 初始化函数
            resize();
            move(Math.floor(items.length / 2));
            bindEvents();
            timer();
        }
        function resize() {
            // 窗口大小变化时调整大小
            width = Math.max(window.innerWidth * .20, 275);
            height = window.innerHeight * .5;
            totalWidth = width * items.length;
            // 设置slider宽度
            slider.style.width = totalWidth + "px";
            // 设置每个item的宽度和高度
            for (var i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = (width - (margin * 2)) + "px";
                item.style.height = height + "px";
            }
        }
        function bindEvents() {
            // 窗口大小变化时调整大小
            window.onresize = resize;
            // 点击prev按钮切换item
            prevBtn.addEventListener('click', () => { prev(); });
            nextBtn.addEventListener('click', () => { next(); });
        }
        init();
        function move(index) {
            // 移动shell到指定的item
            if (index < 1) index = items.length;
            if (index > items.length) index = 1;
            currIndex = index;
            // 遍历所有item
            for (var i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName('frame')[0];
                if (i == (index - 1)) {
                    // 当前item添加active类并设置3D效果
                    item.classList.add('item--active');
                    box.style.transform = "perspective(1200px)";
                } else {
                    // 其他item移除active类并设置3D效果
                    item.classList.remove('item--active');
                    box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                }
            }
            // 移动slider
            slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
            // 设置body背景图片
            var frontBox = items[index - 1].getElementsByClassName('front')[0];
            document.body.style.backgroundImage = frontBox.style.backgroundImage;
        }
        function timer() {
            // 定时器，自动切换shell
            clearInterval(interval);
            interval = setInterval(() => {
                move(++currIndex);
            }, intervalTime);
        }
        // 切换item
        function prev() {
            move(--currIndex);
            timer();
        }
        function next() {
            move(++currIndex);
            timer();
        }
    })();