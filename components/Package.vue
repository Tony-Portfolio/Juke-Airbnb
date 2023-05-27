<template>
    <div class="">
        <section>
            <h3 class="text-4xl font-bold">Paket inap hotel</h3>
            <p class="text-base font-[500] text-black/[0.8]">Our top recomendation for your adventure</p>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                <PackCard image="pack/pack-1.jpg" title="Lyon, Prancis" city="CAYMAN ISLANDS" price="700.000" rating="4.8">
                </PackCard>
                <PackCard image="pack/pack-2.jpg" title="Lyon, Prancis" city="URUGUAY" price="1.000.000" rating="4.7">
                </PackCard>
                <PackCard image="pack/pack-3.jpg" title="Lyon, Prancis" city="ICELAND" price="800.000" rating="5.0">
                </PackCard>
                <PackCard image="pack/pack-4.jpg" title="Lyon, Prancis" city="MONGOLIA" price="750.000" rating="4.9">
                </PackCard>
                <PackCard image="pack/pack-5.jpg" title="Lyon, Prancis" city="BAHRAIN" price="850.000" rating="4.5">
                </PackCard>
                <PackCard image="pack/pack-6.jpg" title="Lyon, Prancis" city="BOSNIA DAN HERZEGOVINA" price="900.000"
                    rating="4.6"></PackCard>
            </div>
        </section>
    </div>
</template>