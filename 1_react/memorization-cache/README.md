# Memorization

- Memorization bir optimizasyon tekniğidir. Daha önce hesaplanmış bir veriyi yada daha önce render edilmmiş bir bileşeni tekrar hesaplamak / render etmek yerine ilk işlemdeki değeri bellekter saklarız tekrardan bu verilere ihtiyacımız olduğunda tekrar hesaplamak yerine bellekten alırız. Bu sayede gereksiz hesaplamaların önününe geçmiş oluruz. Perfromansı arrttırız. Sayfa yüklenme sürelerini kısaltırız

- React'ta memorization adına 3 hook bulunur.

# useMemo()

- Daha önce yapılan hesaplamaların sonucunu hafızada tutar.
- Bu sayede her render sıraısnda yapılacak bir hesaplama varsa bunu tekrar tekrar yapmak yerine ilk hesaplamanının sonucunu arabelleğe atar ve tekrar hesaplama gerektiğinde fonksiyonu çağırmak yerine arabellekteki değeri alır
