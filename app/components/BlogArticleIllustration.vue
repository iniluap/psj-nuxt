<template>
  <div
    class="blog-article-illustration"
    :class="[
      `illustration-${index}`,
      hasFocusEffect() ? 'has-focus-effect' : ''
    ]"></div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    index: number;
    focusEffect: { articleIndex: number; hasFocus: boolean };
  }>();

  const hasFocusEffect = (): boolean => {
    return (
      props.focusEffect.articleIndex === props.index &&
      props.focusEffect.hasFocus
    );
  };
</script>

<style lang="css" scoped>
  .blog-article-illustration {
    width: 100%;
    height: 18rem;
    margin-bottom: var(--whitespace-secondary);
    opacity: 0.8;
    position: relative;
    transition: var(--transition);

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: var(--transition);
      opacity: 0;
    }

    &.has-focus-effect {
      &::before {
        opacity: 1;
      }
    }

    .blog-hero-article & {
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  /* Background patterns from @d__raptis
     Explore at https://www.magicpattern.design/tools/css-backgrounds */

  .illustration-0 {
    background:
      repeating-linear-gradient(
        -45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      repeating-linear-gradient(
        45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      linear-gradient(var(--secondary-blue), var(--secondary-blue));

    &::before {
      background:
        repeating-linear-gradient(
          -45deg,
          var(--secondary-blue) 0px,
          var(--secondary-blue) 5px,
          transparent 5px,
          transparent 8px
        ),
        repeating-linear-gradient(
          45deg,
          var(--secondary-blue) 0px,
          var(--secondary-blue) 5px,
          transparent 5px,
          transparent 8px
        ),
        linear-gradient(var(--light-grey), var(--light-grey));
    }
  }

  .illustration-1 {
    background-color: var(--light-grey);
    opacity: 0.8;
    background-image: radial-gradient(
      circle,
      var(--secondary-rose) 0.8px,
      transparent 0.8px
    );
    background-size: 10px 25px;

    &::before {
      background-color: var(--secondary-rose);
      background-image: radial-gradient(
        circle,
        var(--light-grey) 0.8px,
        transparent 0.8px
      );
      background-size: 10px 25px;
    }
  }

  .illustration-2 {
    background-color: var(--light-grey);
    opacity: 0.8;
    background-image:
      repeating-linear-gradient(
        to right,
        transparent 0,
        transparent 1.6666666666666667px,
        var(--light-grey) 1.6666666666666667px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 6.666666666666667px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 1.6666666666666667px,
        var(--light-grey) 1.6666666666666667px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 6.666666666666667px
      ),
      linear-gradient(to bottom, var(--primary-green) 0.6px, transparent 0.6px),
      linear-gradient(to right, var(--primary-green) 0.6px, transparent 0.6px);
    background-size:
      100% 100%,
      100% 100%,
      20px 20px,
      20px 20px;
    background-position:
      0 0,
      0 0,
      0 -0.2px,
      -0.2px 0;

    &::before {
      background-color: var(--primary-green);
      background-image:
        repeating-linear-gradient(
          to right,
          transparent 0,
          transparent 1.6666666666666667px,
          var(--primary-green) 1.6666666666666667px,
          var(--primary-green) 5px,
          transparent 5px,
          transparent 6.666666666666667px
        ),
        repeating-linear-gradient(
          to bottom,
          transparent 0,
          transparent 1.6666666666666667px,
          var(--primary-green) 1.6666666666666667px,
          var(--primary-green) 5px,
          transparent 5px,
          transparent 6.666666666666667px
        ),
        linear-gradient(to bottom, var(--light-grey) 0.6px, transparent 0.6px),
        linear-gradient(to right, var(--light-grey) 0.6px, transparent 0.6px);
      background-size:
        100% 100%,
        100% 100%,
        20px 20px,
        20px 20px;
      background-position:
        0 0,
        0 0,
        0 -0.2px,
        -0.2px 0;
    }
  }

  .illustration-3 {
    opacity: 0.8;
    background: repeating-radial-gradient(
      circle at 50% 50%,
      transparent 0,
      transparent 4px,
      var(--tertiary-yellow) 4px,
      var(--tertiary-yellow) 5px,
      transparent 5px,
      transparent 10px
    );

    &::before {
      background-color: var(--tertiary-yellow);
      background: repeating-radial-gradient(
        circle at 50% 50%,
        var(--tertiary-yellow) 0,
        var(--tertiary-yellow) 4px,
        var(--light-grey) 4px,
        var(--light-grey) 5px,
        var(--tertiary-yellow) 5px,
        var(--tertiary-yellow) 10px
      );
    }
  }
</style>
