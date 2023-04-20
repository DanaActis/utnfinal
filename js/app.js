window.jsPDF = window.jspdf.jsPDF; // add this line of code


function captura(){
    var nombrecliente=document.getElementById("nombres").value;
    var telefonocliente=document.getElementById("telefono").value;
    var direccioncliente=document.getElementById("direccion").value;
    var razacliente=document.getElementById("raza").value;
    var serviciocliente=document.getElementById("servicio").value;
    var retirocliente=document.getElementById("retiro").value;
    var emailcliente=document.getElementById("email").value;
    var comentariocliente=document.getElementById("comentarios").value;
    var imgdata="data:image/jpeg;base64,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FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//Z";




    const doc = new jsPDF();
    doc.addImage(imgdata,140,10,50,60);
    doc.text("Nombre Cliente:"+" "+ nombrecliente, 10, 10);
    doc.text("Telefono Cliente:"+" "+ telefonocliente, 10, 20);
    doc.text("Direccion Cliente:"+" "+ direccioncliente, 10, 30);
    doc.text("Raza Perro:"+" "+ razacliente, 10, 40);
    doc.text("Servicio Solicitado:"+" "+ serviciocliente, 10, 50);
    doc.text("Solicita Retiro:"+" "+ retirocliente, 10, 60);
    doc.text("Email Cliente:"+" "+ emailcliente, 10, 70);
    doc.text("Comentario:"+" "+ comentariocliente, 10, 80);
    

    doc.save("a4.pdf");

}
