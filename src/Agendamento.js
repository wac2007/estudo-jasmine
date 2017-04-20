function Agendamento() {
    var clazz = {
        para: function(consulta) {
            var umDiaEmMilli = 1000 * 60 * 60 * 24;
            var vinteDiasEmMilli = umDiaEmMilli * 20;
            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilli);
            while (novaData.getDay() == 0 || novaData.getDay() == 6) novaData = new Date(novaData.getTime() + umDiaEmMilli);
            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;
        }
    }
    return clazz;
}