window.onload = function() {
    
    var formHeight = document.getElementById('newGroup').clientHeight;
    var existingGroupForm = document.getElementById('existingGroup');
    
    existingGroupForm.style.marginTop = "-" + formHeight + "px";
    
    var newGroupOption = document.getElementById('newGroupOption');
    var existingGroupOption = document.getElementById('existingGroupOption');
    
    var newGroupCell = document.getElementById('newGroupCell');
    var existingGroupCell= document.getElementById('existingGroupCell');
    
    var newGroupForm = document.getElementById('newGroup');
    var existingGroupForm = document.getElementById('existingGroup');
    
    existingGroupForm.classList.add('hidden');
    
    newGroupOption.addEventListener('change', function(){
            newGroupForm.classList.remove('hidden');
            existingGroupForm.classList.remove('hidden');
        
            newGroupCell.classList.add('selectedChoice');
            existingGroupCell.classList.remove('selectedChoice');
            
            existingGroupForm.style.marginTop = "-" + formHeight + "px";
            existingGroupForm.classList.add('animate__fadeOutRight');
            setTimeout(function() {
                existingGroupForm.classList.add('hidden');
                existingGroupForm.classList.remove('animate__fadeOutRight');
            },500)
    });
    
    existingGroupOption.addEventListener('change', function(){
            newGroupForm.classList.remove('hidden');
            existingGroupForm.classList.remove('hidden');
        
            newGroupCell.classList.remove('selectedChoice');
            existingGroupCell.classList.add('selectedChoice');
        
            newGroupForm.classList.add('animate__fadeOutLeft')
            setTimeout(function() {
                existingGroupForm.style.marginTop = "0px";
                newGroupForm.classList.add('hidden');
                newGroupForm.classList.remove('animate__fadeOutLeft');
            },500)
    });
    
    var noPref = document.getElementById('noOption');
    var barPref = document.getElementById('barristerOption');
    var solPref = document.getElementById('solicitorOption');
    
    var noPrefCont = document.getElementById('noOptionContainer');
    var barPrefCont = document.getElementById('barristerOptionContainer');
    var solPrefCont = document.getElementById('solicitorOptionContainer');
    
    
    var noPref1 = document.getElementById('noOption1');
    var barPref1 = document.getElementById('barristerOption1');
    var solPref1 = document.getElementById('solicitorOption1');
    
    var noPrefCont1 = document.getElementById('noOptionContainer1');
    var barPrefCont1 = document.getElementById('barristerOptionContainer1');
    var solPrefCont1 = document.getElementById('solicitorOptionContainer1');
    
    
    noPref.addEventListener('change', function(){        
            noPrefCont.classList.remove('roleChoice');
            barPrefCont.classList.remove('roleChoice');
            solPrefCont.classList.remove('roleChoice');
            noPrefCont.classList.add('roleChoice');
    });
    
    barPref.addEventListener('change', function(){        
            noPrefCont.classList.remove('roleChoice');
            barPrefCont.classList.remove('roleChoice');
            solPrefCont.classList.remove('roleChoice');
            barPrefCont.classList.add('roleChoice');
    });
    
    solPref.addEventListener('change', function(){        
            noPrefCont.classList.remove('roleChoice');
            barPrefCont.classList.remove('roleChoice');
            solPrefCont.classList.remove('roleChoice');
            solPrefCont.classList.add('roleChoice');
    });
    
    
    
    noPref1.addEventListener('change', function(){        
            noPrefCont1.classList.remove('roleChoice');
            barPrefCont1.classList.remove('roleChoice');
            solPrefCont1.classList.remove('roleChoice');
            noPrefCont1.classList.add('roleChoice');
    });
    
    barPref1.addEventListener('change', function(){        
            noPrefCont1.classList.remove('roleChoice');
            barPrefCont1.classList.remove('roleChoice');
            solPrefCont1.classList.remove('roleChoice');
            barPrefCont1.classList.add('roleChoice');
    });
    
    solPref1.addEventListener('change', function(){        
            noPrefCont1.classList.remove('roleChoice');
            barPrefCont1.classList.remove('roleChoice');
            solPrefCont1.classList.remove('roleChoice');
            solPrefCont1.classList.add('roleChoice');
    });
}