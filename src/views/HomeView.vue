<template>
  <main>
    <section class="notes-page">
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--red"></div>
        <div class="notes-page__syllable notes-page__syllable--partial">Tu</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--orange"></div>
        <div class="notes-page__syllable">taj</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--red"></div>
        <div class="notes-page__syllable notes-page__syllable--partial">sy</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--green"></div>
        <div class="notes-page__syllable notes-page__syllable--partial">la</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--orange"></div>
        <div class="notes-page__syllable">by</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--red"></div>
        <div class="notes-page__syllable notes-page__syllable--partial">bę</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--orange"></div>
        <div class="notes-page__syllable">dą</div>
      </div>
      <div class="notes-page__note">
        <div class="notes-page__icon notes-page__icon--green"></div>
        <div class="notes-page__syllable">hej!</div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  height: 100vh;
}

.notes-page {
  width: 800px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: start;
  row-gap: 15px;
  border: 1px solid rgb(201, 201, 201);
  padding: 30px;

  &__note {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }

  &__icon {
    border-radius: 50%;
    width: 85%;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    &--red {
      background-color: red;
    }

    &--orange {
      background-color: orange;
    }

    &--green {
      background-color: green;
    }
  }

  &__syllable {
    margin-top: 15px;
    font-size: 1.5em;
    text-align: center;
    width: 100%;

    &--partial {
      position: relative;

      &::after {
        content: "-";
        position: absolute;
        width: 10px;
        right: -5px;
      }
    }
  }
}
</style>
