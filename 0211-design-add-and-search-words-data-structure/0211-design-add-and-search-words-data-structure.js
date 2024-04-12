function Node() {
  this.nodes = [];
  this.endFlag = false;
}

var WordDictionary = function() {
   this.startNode = new Node();
  this.startNode.endFlag = true;  
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  var node = this.startNode;

  for (var i = 0, len = word.length; i < len; i++) {
    var item = word.charCodeAt(i) - 97;
    if (!node.nodes[item]) {
      node.nodes[item] = new Node();
    }
    node = node.nodes[item];
  }

  node.endFlag = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var node = this.startNode;
  var isFound = false;

  dfs(node, 0);

  function dfs(node, index) {
    if (isFound)
      return;

    if (index === word.length) {
      isFound = node.endFlag;
      return;
    }

    if (word[index] === '.') {
      for (var i = 0; i < 26; i++) {
        if (node.nodes[i])
          dfs(node.nodes[i], index + 1);
      }
    } else {
      var item = word.charCodeAt(index) - 97;
      if (node.nodes[item])
        dfs(node.nodes[item], index + 1);
    }
  }

  return isFound; 
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */