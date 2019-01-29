;(function ($) {

    $.fn.slider = function (options) {


        var Slider = function ($sliderContainer) {
          this.settings = {
                speed: 500,
                slideView: 1,
                btnNext: null,
                btnPrev: null,
                slideScroll: 1,
            };
            if (options) {
                $.extend(this.settings, options);
            }

            this.$sliderContainer = $sliderContainer;

            // container ul.slides
            this.$slidesContainer = this.$sliderContainer.children(':first');

            //slide
            this.$slide = this.$slidesContainer.find('.slide');
            this.$slide.width(this.$slidesContainerWidth/this.settings.slideView);

            this.$step = this.$slide.outerWidth();


            // width slides container
            this.$slidesContainerWidth = this.$sliderContainer.width(this.$step * this.settings.slideView);
            this.$sliderContainerWidth = this.$slidesContainer.width(this.$step * this.$slidesContainer.children().length);


             this.$slidesContainer.css('margin-left', -this.$step * this.settings.slideScroll);

            $(this.settings.btnNext).click(this.moveNext.bind(this));
            $(this.settings.btnPrev).click(this.movePrev.bind(this));
        };


        Slider.prototype.moveNext = function () {
            this.$slidesContainer.animate(
                {'left': -this.$step * this.settings.slideScroll},
                this.settings.speed,
                this.moveNextCallback.bind(this)
            )
        };

        Slider.prototype.movePrev = function () {
            this.$slidesContainer.animate(
                {'left': this.$step * this.settings.slideScroll},
                this.settings.speed,
                this.movePrevCallback.bind(this)
            )
        };

        Slider.prototype.moveNextCallback = function () {
            this.$slidesContainer.children(':nth-child(-n+' + this.settings.slideScroll + ')').appendTo(this.$slidesContainer);
            this.$slidesContainer.css('left', 0);


        };

        Slider.prototype.movePrevCallback = function () {
            this.$slidesContainer.children(':nth-last-child(-n+' + this.settings.slideScroll + ')').prependTo(this.$slidesContainer);
            this.$slidesContainer.css('left', 0);
        }

        return this.each(function (index, element) {
            new Slider($(element));
        });
    };
})(jQuery);
