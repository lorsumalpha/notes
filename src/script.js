/*Funktion zum Speichern der Notiz auf dem PC*/
$('#save').click(function(e) {
    if (!(document.getElementById('editor').value == "" || document.getElementById('editor').value == null)) {
        var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(document.getElementById('editor').value);
        var el = e.currentTarget;
        el.href = data;
        el.target = '_blank';
        el.download = 'notiz.txt';
        return;
    }else{
        alert("Bitte keine leeren Texte abspeichern.");
        return;
    }
});

