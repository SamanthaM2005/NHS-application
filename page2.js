function goToStep2() {
    const postcode = document.getElementById('postcode').value.trim();
    const age = document.getElementById('age').value.trim();
    if (!postcode || !age) {
        alert('Please fill in both fields.');
        return;
    }
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}
function goBack() {
    document.getElementById('step-1').classList.remove('hidden');
    document.getElementById('step-2').classList.add('hidden');
}