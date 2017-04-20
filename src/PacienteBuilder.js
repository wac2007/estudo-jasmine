function PacienteBuilder() {
    var nome = "Guilherme";
    var idade = 28;
    var peso = 72;
    var altura = 1.80;

    var clazz = {
        constroi: function() {
            return PacienteBuilder(nome, idade, peso, altura);
        },
        comIdade: function(valor) {
            idade = valor;
            return this;
        }
    };
    return clazz;
}