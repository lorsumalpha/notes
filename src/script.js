/*Funktion zum Speichern der Notiz auf dem PC*/
function saveData() {
$(function() {
    $('#save').click(function(e) {
        var data = document.getElementById('editor').value;
        var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(data);
        var el = e.currentTarget;
        el.href = data;
        el.target = '_blank';
        el.download = 'notiz.txt';
    });
});
}
saveData();