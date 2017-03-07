var $ = require('../lib/jquery-3.1.1.min.js');
var Carousel = (function(){
    function _Carousel($ct){
      this.$ct = $ct;
      this.init();
      this.bind();
    }
    _Carousel.prototype.init = function(){
      var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
          $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
          $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
          $bullet = this.$bullet = this.$ct.find('.bullet');
      var $firstImg = $imgCt.find('li').first(),
          $lastImg = $imgCt.find('li').last();

      this.curPageIndex = 0;
      this.imgLength = $imgCt.children().length;
      this.isAnimate = false;
      this.imgWidth = $('body').width();
      this.$imgCt.find('li').width(this.imgWidth);
      //需要把图片都设置为一样的宽度
      //适用于图片大小是一样的
      $imgCt.prepend($lastImg.clone());
      $imgCt.append($firstImg.clone());

      $imgCt.width( this.imgWidth * $imgCt.children().length );
      $imgCt.css({"left":0-this.imgWidth});
    };

    _Carousel.prototype.bind = function(){
      var _this = this;
      this.$preBtn.on('click',function(e){
          e.preventDefault();
          _this.playPre();
      });

      this.$nextBtn.on('click',function(e){
          e.preventDefault();
          _this.playNext();
      });

      this.$bullet.on('click','li',function(e){
          var idx = $(this).index();
          if(idx>_this.curPageIndex){
              _this.playNext(idx-_this.curPageIndex);
          }else if (idx<_this.curPageIndex) {
              _this.playPre(_this.curPageIndex-idx);
          }
      })
      // this.playAuto();
    };
    //添加自动播放功能，需要注意的是如果直接在setInterval中调用函数那么this的指向会是window，可以用一个匿名函数
    //包裹着你要调用的函数
    // _Carousel.prototype.playAuto =function(){
    //   var _this = this;
    //   _this.timer = setInterval(function(){
    //       _this.playNext();
    //   },4000)
    // }

    _Carousel.prototype.playPre = function(idx){
      var _this = this,
          idx = idx || 1;
      if(this.isAnimate) return;
      this.isAnimate = true;
      this.$imgCt.animate({
          left:'+='+this.imgWidth*idx
      },800,function(){
          _this.curPageIndex = (_this.imgLength+_this.curPageIndex-idx)%_this.imgLength;
          _this.setBullet();
          if(_this.curPageIndex === _this.imgLength-1){
              _this.$imgCt.css({left:0-_this.imgWidth*_this.imgLength});
          }
      });
      this.isAnimate = false;
      
    };

    _Carousel.prototype.playNext = function(idx){
      var _this = this,
          idx = idx || 1;
      if(this.isAnimate) return;
      this.isAnimate = true;
      // console.log(this);
      this.$imgCt.animate({
          left:'-='+this.imgWidth*idx
      },800,function(){
          _this.curPageIndex = (_this.curPageIndex+idx)%_this.imgLength;
          _this.setBullet();
          if(_this.curPageIndex === 0){
              _this.$imgCt.css({left:0-_this.imgWidth});
          }
      });
      this.isAnimate = false;
      
    };

    _Carousel.prototype.setBullet = function(){
      this.$bullet.children().removeClass('active')
          .eq(this.curPageIndex).addClass('active')
    };

    //由于直接new还是会暴露出对象的属性和方法，我们可以把所有的构造函数和原型放在一个闭包里面。
    //通过返回一个外部可以调用的接口来实现实例轮播
    return {
      init:function($ct){
          $ct.each(function(index,node){
              //注意each里面的node是原生dom元素，需要用$(node)包裹才是jq元素
              new _Carousel($(node));
          })
      }
    }
  })();
module.exports = Carousel;


  // Carousel.init($('.carousel'));
  // new _Carousel($('._carousel').eq(0));
  // new _Carousel($('._carousel').eq(1));
