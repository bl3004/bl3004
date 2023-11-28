  // 使用库
        //定义一个名为 makeWinHeight 的函数，用于设置窗口高度和项目高度
        var makeWinHeight = function () {
            //获取窗口高度
            var vh = $(window).height();
            //将项目高度设置为窗口高度的一半
            var projects = vh / 2;
            //设置 id 为 scene 和 class 为 layer main 的元素的高度为窗口高度
            $('#scene, .layer.main').height(vh);
            //设置 id 为 scene 中 class 为 col 的元素的高度为项目高度，并将其子元素 a 的高度也设置为项目高度
            $('#scene .col a, #scene .col').height(projects);
        }
        //在文档加载完成后执行 makeWinHeight 函数，以设置窗口高度和项目高度
        $(document).ready(function () {
            makeWinHeight();
        });
        //在窗口大小变化时，重新执行 makeWinHeight 函数以更新窗口高度和项目高度
        $(window).resize(function () {
            makeWinHeight();
        });
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);