describe("MaiorEMenor", function(){
    it("deve entender numeros em ordem nao sequencial", function() {
        var algoritmo = new MaiorEMenor();
        var nums = [5,15,7,9];
        algoritmo.encontra(nums);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender numeros em ordem crescente", function() {
        var algoritmo = new MaiorEMenor();
        var nums = [3, 5, 7, 15];
        algoritmo.encontra(nums);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(3);
    });

    it("deve entender numeros em ordem decrescente", function() {
        var algoritmo = new MaiorEMenor();
        var nums = [15, 6, 4, 3];
        algoritmo.encontra(nums);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(3);
    });
});