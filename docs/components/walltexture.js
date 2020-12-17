AFRAME.registerComponent("foo", {
    init: function () {
        el.addEventListener('mouseenter', () => {
            el.setAttribute('material', 'src', '#texture');
        });
    }
})