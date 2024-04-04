/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  let tempBanks = new Set(bank);  
    let strChars = ['A', 'T', 'C', 'G'];        
    let Q = [[startGene,0]];
    let item, dist, i, j;
    if( !tempBanks.has(endGene) ) return -1;
    
    while( Q.length > 0 ) {
        [item,dist] = Q.shift();
        if( item == endGene ) return dist;
        
        for( i=0; i<8; i++ ) {
            for( j=0; j<4; j++ ) {
                if( item[i] == strChars[j] ) continue;
                var node = item.slice(0,i) + strChars[j] + item.slice(i+1);
                if( tempBanks.has(node) ) {
                    Q.push([node,dist+1]);
                    tempBanks.delete(node);
                }
            }
        }
    }   
    return -1;
};