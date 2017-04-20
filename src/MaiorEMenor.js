function MaiorEMenor() {
    var menor;
    var maior;

    var clazz = {
        encontra: function (nums) {
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(function(num) {
                if (num < menor) menor = num;
                if (num > maior) maior = num;
            });
        },
        pegaMaior: function() { return maior; },
        pegaMenor: function() { return menor; }
    };

    return clazz;
};