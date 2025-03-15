import MenuSection from "@/components/core/menu/section";


export default function FoodMenu() {
    return (
      <main className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-center">Menu</h1>

        <section className="grid grid-cols-1 gap-6">

          {/* Pizza Section */}
          <MenuSection
            title="Pizza"
            items={[
              { name: "Margherita", description: "Kirsikkatomaatti, rucola", prices: { Norm: 12.2, Large: 19.9 } },
              { name: "Bologna", description: "Paistettua jauhenlihaa", prices: { Norm: 12.2, Large: 19.9 } },
              { name: "Francescana", description: "Palvikinkku, katkarapu, herkkusieni", prices: { Norm: 14.9, Large: 23.4 } },
              { name: "Americano", description: "Palvikinkku, aurajuusto, ananas", prices: { Norm: 13.9, Large: 23.4 } },
              { name: "Special Opera", description: "Palvikinkku, katkarapu, herkkusieni", prices: { Norm: 13.9, Large: 23.4 } },
              { name: "Seafood", description: "Tonnikala, simpukka, katkarapu", prices: { Norm: 13.9, Large: 23.4 } },
              { name: "White Sabbath", description: "Smetana, juusto, permankinkku, rucola, herkkusieni", prices: { Norm: 13.9, Large: 23.4 } },
              { name: "Maruzella", description: "Mozzarelle, kirsikkatomaatti, rucola, pestokastike", prices: { Norm: 13.9, Large: 23.4 } },
              { name: "Vegetarian", description: "Herkkusieni, kirsikkatomaatti, paprika, punasipuli, oliivi", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Antipasto", description: "Artisokka, aurinkokuivattu tomaatti, herkkusieni, punasipuli, rucola", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Zucchini Rocks", description: "Kirsikkatomaatti, kesäkurpitsa, ricotta, punasipuli", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Salmon", description: "Kylmäsavustettu lohi, punasipuli, aurinkokuivattu tomaatti, smetana, rucola", prices: { Norm: 15.9, Large: 26.8 } },
              { name: "Oma Valinta", description: "3/4 vapaavalintaista täytettä", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Vegaani", description: "Tomaattikastike, vegaanijuusto, tu juusto, paprika, herkkusieni, kirsikkatomaatti, kapris", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "BBQ Chicken", description: "Grillattu kana, aurinkokuivattu tomaatti, punasipuli, BBQ-kastike", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "K&A Special", description: "Grillattu kana, ananas, rucola, parmesanjuutso", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Smetana", description: "kebabliha, punasipuli, jalopeeno, kirsikkatomaatti, smetana", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Super", description: "Salami, palvikinkku, pekoni, kananmuna", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Romeo", description: "Salami, ananas, katkarapu, aurajuusto", prices: { Norm: 14.9, Large: 23.8 } },
              { name: "Dillinger", description: "Salami, palvikinkku, paistettu naudanliha, punasipuli", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Empire Special", description: "Salami, katkarapu, palvikinkku, punasipuli, tuplajusto, valkosipuli", prices: { Norm: 14.9, Large: 23.8 } },
              { name: "Papa’s", description: "Salami, tuorepaprika, aurajuusto, punasipuli, oliivi", prices: { Norm: 14.9, Large: 23.8 } },
              { name: "Pepperoni", description: "Pepperoni, mozzarella, kirsikkatomaatti, pestokastike", prices: { Norm: 14.9, Large: 24.8 } },
              { name: "Mexicano", description: "Pepperoni, punasipuli, jalopeno, ananas, tulinen salsa", prices: { Norm: 15.9, Large: 26.4 } },
              { name: "Moussaka", description: "Munakoiso, fetajauhenliha, oliivi", prices: { Norm: 14.9, Large: 24.8 } },
            ]}
          />

          {/* K-Zone Section */}
          <MenuSection
            title="K-Zone"
            items={[
              { name: "Kana K-Zone", description: "Kana, tuorepaprika, kirsikkatomaatti, punasipuli, salaatti, valkosipuli tai chilimajoneesi", prices: { Norm: 15.5 } },
              { name: "Feta K-Zone", description: "Feta, punasipuli, kirsikkatomaatti, paprika, salaatti, valkosipuli tai chilimajoneesikastike", prices: { Norm: 15.5 } },
              { name: "Kebab K-Zone", description: "Kebab, punasipuli, kirsikkatomaatti, jalopeeno, salatti, valkosipuli tai chilimajoneesikastike", prices: { Norm: 15.5 } },
              { name: "Jauheliha", description: "Jauheliha, punasipuli, kirsikkatomaatti, jalopeeno, salatti, valkosipuli tai chilimajoneesikastike", prices: { Norm: 15.5 } },
            ]}
          />

          {/* Kebabit Section */}
          <MenuSection
            title="Kebabit"
            items={[
              { name: "Pitakebab", prices: { Norm: 10.9 } },
              { name: "Kebab Riisi", prices: { Norm: 13.5 } },
              { name: "Kebab Rulla", prices: { Norm: 13.5 } },
              { name: "Kanakebab Pita", prices: { Norm: 10.9 } },
              { name: "Kanakebab Riisillä", prices: { Norm: 13.5 } },
              { name: "Kanakebab Rulla", description: "Kana-Kebab annoksiin kuuluu kanakebabinliha, currykastike, salaatti, punasipuli, kurkku, kirsikkatomaatti, vihreä chili, majoneesikastike", prices: { Norm: 13.5 } },
              { name: "Kebab Ranskalaisilla", prices: { Norm: 13.5 } },
              { name: "Iskender Kebab", prices: { Norm: 13.5 } },
              { name: "Kebab Salaatti", prices: { Norm: 13.5 } },
              { name: "Kanakebab Ranskalaisilla", prices: { Norm: 13.5 } },
              { name: "Kanakebab Salaatilla", prices: { Norm: 13.5 } },
            ]}
          />

          {/* Salaatit Section */}
          <MenuSection
            title="Salaatit"
            items={[
              { name: "Feta Salaatti", description: "Fetakuutioita ja kalamataoliivi", prices: { Norm: 13.5 } },
              { name: "Kanasalaatti", description: "Uunissa grillattu kanan sisäfileet", prices: { Norm: 13.5 } },
              { name: "Merisalaatti", description: "Tonnikala ja katkarapu", prices: { Norm: 13.5 } },
              { name: "Lohisalaatti", description: "Kylmäsavustettu lohi ja aurinkokuivattu tomaatit", prices: { Norm: 15.5 } },
            ]}
          />

          {/* Pastat Section */}
          <MenuSection
            title="Pastat"
            items={[
              { name: "Arrabbaita", description: "Tomaattikastike,valkospuli, chili, paremesan, rucola", prices: { Norm: 12.5 } },
              { name: "Palermo", description: "Tomaattikastike/kerma, pinaatti, feta, chili, parmesan", prices: { Norm: 13.9 } },
              { name: "Kasvis", description: "Tomaattikastike, herkkusieni, paprika, oliivi, sipuli", prices: { Norm: 14.5 } },
              { name: "Bolognese", description: "Tomaattikastike, parmesan, jauheliha", prices: { Norm: 12.9 } },
              { name: "Pollo", description: "Kanaa kermaisessa pestokastikeessa. Päällä on paistettua vuohenjuustoa", prices: { Norm: 14.9 } },
              { name: "Salsiccia E Funghi", description: "Tomaattikastike, herkkusieni, pepperonimakkara, aurajuusto", prices: { Norm: 14.9 } },
              { name: "Dupasturi", description: "Tomaattikastike, kana,oliivi, kapris, sipuli, parmesan", prices: { Norm: 14.9 } },
              { name: "Carbonara", description: "Kerma, pekoni, kananmuna, parmesan", prices: { Norm: 12.9 } },
              { name: "Pescatora", description: "Tomaattikastike, sinisimpukka, mustekala, katkarapu, chili, valkosipuli, parmesan", prices: { Norm: 15.9 } },
              { name: "Di Savoca", description: "Kermakastike, herkkusieni, kinkku, aurajuusto, parmesan", prices: { Norm: 13.9 } },
              { name: "Melanzane", description: "Munakoiso, salottissipulia ja tomaattikastiketta", prices: { Norm: 13.5 } },
            ]}
          />

          {/* Uunipastat Section */}
          <MenuSection
            title="Uunipastat"
            items={[
              { name: "Cannellonipasta", description: "Ricotta, pinaatilla täytetty pastarulla, tomaattikastike, kerma, cheddar-mozzarella juusto mix", prices: { Norm: 12.5 } },
              { name: "Americano", description: "Kinkku, ananas, aurajuusto, juusto, kerma, tomaattikastike", prices: { Norm: 13.9 } },
              { name: "Äyriäispasta", description: "Simpukka, katkarapu, tonnikala, kerma, tomaattikastike, juusto", prices: { Norm: 14.9 } },
              { name: "Bolognese", description: "Jauheliha, juusto, kerma, tomaattikastike", prices: { Norm: 12.9 } },
            ]}
          />

          {/* Virvoitusjuomat Section */}
          <MenuSection
            title="Virvoitusjuomat"
            items={[
              { name: "Coca-Cola, Sprite, Fanta, Bonaqua", prices: { Pieni: 3, "Iso 0.5L": 4 } },
              { name: "Mehu", prices: { Norm: 2 } },
              { name: "Maito 1L", prices: { Norm: 3 } },
              { name: "Kahvi tai Tee", prices: { Norm: 3 } },
            ]}
          />
        </section>
      </main>
    );
} 
