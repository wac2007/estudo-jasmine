describe('Consulta', function() {
    var guilherme;

    beforeEach(function () {
        new PacienteBuilder().comIdade(30).constroi();
    });

    it('nao deve cobrar nada se for um retorno', function() {
        var consulta = new Consulta(guilherme, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it('deve cobrar 25 por cada procedimento comum', function(){
        var consulta = new Consulta(guilherme, ['proc1', 'proc2'], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it('deve cobrar preco especifico dependendo do procedimento', function(){
        var consulta = new Consulta(guilherme, ['proc1', 'proc2', 'raio-x', 'gesso'], false, false);

        expect(consulta.preco()).toEqual(25 + 25 + 55 + 32);
    });

    it('deve cobrar o dobro se for particular', function(){
        var consulta = new Consulta(guilherme, ['proc1', 'proc2'], true, false);

        expect(consulta.preco()).toEqual(100);
    });
});