<template>
  <v-container class="strongPoints" fluid align-center align-content-center>
    <section-header text="Dlaczego warto się z nami wybrać"></section-header>
    <v-layout row wrap justify-center>
      <icon-with-description
        v-for="(item, index) in items"
        :key="item.image + index"
        :image="item.image"
        :description="item.descr"
      />
    </v-layout>
  </v-container>
</template>

<script>
import IconWithDescription from "../components/Avatars/IconWithDesc";
import SectionHeader from "../components/SectionHeader";

export default {
  name: "StrongPointsContainer",
  components: { IconWithDescription, SectionHeader },
  data() {
    return {
      items: [
        {
          image: "directions_bike",
          descr:
            "Kilka niezapomnianych za nami. Czujemy, że " +
            "przed nami jeszcze lepsze, zapraszamy w nasze szeregi!"
        },
        {
          image: "settings",
          descr:
            "Nasze wyprawy mają świetne zaplecze techniczne. Piotr już" +
            " wielokrotnie wspierał technicznie całe pielgrzymki rowerowe gdzie" +
            " jechało ponad 100 rowerzystów."
        },
        {
          image: "camera_alt",
          descr:
            "W drużynie posiadamy fotografa, specjalistę od robienia zdjęć" +
            "„za siebie”. Po każdej ekspedycji otrzymasz komplet zdjęć i " +
            "możliwość zamówienia fantastycznej fotoksiążki."
        },
        {
          image: "favorite",
          descr:
            "Posiadanie w szeregach wybitnego studenta medycyny, człowieka, który " +
            "nigdy nie traci zimnej krwi daje poczucie bezpieczeństwa. Widoki na trasach " +
            "często zapierają dech w piersiach, ale spokojnie – w nagłych przypadkach Andrzej" +
            " przywróci waszą akcję serca!"
        },
        {
          image: "build",
          descr:
            "Zdajemy sobie sprawę, że nie od razu Kraków zbudowano i że nie każdy ma pełno sprzętu." +
            " Spokojnie – mamy zaprzyjaźnione sklepy, gdzie doświadczeni rowerzyści pomogą" +
            " wam wybrać rower nawet na dzień przed wyprawą!"
        },
        {
          image: "class",
          descr:
            "Trafiłeś w odpowiednie miejsce. Konrad to specjalista od miejsc noclegowych, promów," +
            " darmowych autostrad i szczegółów – o których już dawno byś zapomniał. Całe szczęście, że" +
            " pracuje właśnie tutaj!"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
