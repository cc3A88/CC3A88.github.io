      historyArr.push(s);
      renderAll();
    };
  });

  document.getElementById('btn-undo').onclick = ()=>{
    if (!historyArr.length) return;
    const r = historyArr.pop();
    if (historyArr.length){
      const p = historyArr[historyArr.length-1];
      transitions[p][r] = Math.max(0,(transitions[p][r]||0)-1);
    }
    renderAll();
  };

  document.getElementById('btn-reset').onclick = ()=>{
    states.forEach(a=> states.forEach(b=> transitions[a][b]=0));
    historyArr = [];
    renderAll();
  };
});
