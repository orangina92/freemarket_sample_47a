$(document).on('turbolinks:load', function() {
  var brand_accordion = '.inner-header__under__left__brand__text__accordion'
  $(function() {
    $('.inner-header__under__left__brand__text').hover(function() {
      $(brand_accordion).fadeIn();
    });
  });

  $('.header').hover(function() {
    $(brand_accordion).fadeOut();
  });

  $('.inner-header__under__left__category').hover(function() {
    $(brand_accordion).fadeOut();
  });

  var category_accordion = '.inner-header__under__left__category__text__accordion'
  $(function() {
    $('.inner-header__under__left__category__text').hover(function() {
      $(category_accordion).fadeIn();
    });
  });

  $('.header').hover(function() {
    $(category_accordion).fadeOut();
  });

  $(function() {
    $('.inner-header__under__left__category__text__accordion__ladies').hover(function() {
      $('.ladies-middle').fadeIn();
    });
  });

    $('.header').hover(function() {
      $('.ladies-middle').fadeOut();
    });

  $(function() {
    $('.ladies-middle__tops').hover(function() {
      $('.ladies-bottom').fadeIn();
    });
  });

    $('.header').hover(function() {
      $('.ladies-bottom').fadeOut();
    });

  $(function() {
    $('.inner-header__under__right__to-do-list').hover(function() {
      $('.inner-header__under__right__to-do-list__accordion').fadeIn();
    });
  });

    $('.header').hover(function() {
      $('.inner-header__under__right__to-do-list__accordion').fadeOut();
    });

  $(function() {
    $('.inner-header__under__right__notice').hover(function() {
      $('.inner-header__under__right__notice__text__accordion').fadeIn();
    });
  });

    $('.header').hover(function() {
      $('.inner-header__under__right__notice__text__accordion').fadeOut();
    });

  $(function () {
    $('.inner-header__under__right__my-page').hover(function () {
      $('.inner-header__under__right__my-page__accordion').fadeIn();
    });
  });

  $('.header').hover(function () {
    $('.inner-header__under__right__my-page__accordion').fadeOut();
  });
});

