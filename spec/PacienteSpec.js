describe("Paciente", function() {
    it("deve calcular o imc", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        var imc = guilherme.imc();

        expect(imc).toEqual(72 / (1.82 * 1.82));

    });

    it("deve calcular o imc 2", function(){
        var guilherme = new Paciente("Guilherme", 28, 80, 1.77);
        
        var imc = guilherme.imc();

        expect(imc).toEqual(80 / (1.77 * 1.77));

    });
});