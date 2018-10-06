// var begin = performance.now()
// ...
// function logTime(begin){
// 	var end = performance.now()
// 	console.log( end - begin );
// }


var dylan = {
	getFactors: function(x){
		return Array.from(Array(x + 1), (_, i) => i).filter(i => x % i === 0)
	},
	isPrime: function(x){
		if([1,3,5,7].includes(x)){return true}
		if(getFactors(x).filter(function(el){return el != 1 && el != x}).length){return false}else{return true}
	},
	fibonacci: function (n){
		if(n == 1 || n == 0)return n;
		return fibonacci(n-1) + fibonacci(n-2);
	},
	swap: function(x,y){
		console.log('before: x = ' + x + ', y = ' + y)
		console.log('after: x = ' + arguments[1] + ', y = ' + arguments[0])
	},
	mergeSortedArray: function(arr1,arr2){
		if(a.length ==0)return b;
	  	if(b.length ==0)return a;
		arr1.forEach(function(el){
			arr2.push(el);
		})
		return arr2.sort();
	},
	highestCommondivisor: function(x,y){
		if(x % y == 0){ return y}
		if(y % x == 0){ return x}
		var arr = this.getFactors(Math.min(x,y)), highest_common_divisor;
		arr.splice(-1,1);
		for(var i = arr.length; i > -1; i--){
			if(Math.max(x,y) % arr[i] == 0){
				highest_common_divisor = arr[i];
				break; 
			}
		}
		return highest_common_divisor;
	},
	deDupe: function(arr){
		var newArr = [];
		arr.forEach(function(el){if(!newArr.includes(el)){newArr.push(el)}})
		return newArr;
	},
	reverseMethods: {
		reverse: function(str){
			var reversed = [], i;
			for(i=str.length-1; i>-1; i--){
				reversed.push(str[i]);
			}
			console.log(reversed)
			return reversed.join('')
		},
		recursiveReverse: function(str, reversedStr){
			reversedStr = reversedStr || '';
			if(!str && reversedStr)return reversedStr;
			if(str){
				newStr = str.split('');
				char = newStr.pop();
				reversedStr += char;
				return recursiveReverse(newStr.join(''), reversedStr);
			}
		},
		extendString: function(){
			String.prototype.reverseBy = function(type){
				try {
					if(!type || (type != 'char' && type != 'word')) throw 'this type is not recognized';
					var recursiveReverse = function(str, type, reversedStr){
						reversedStr = reversedStr || '';
						if(!str && reversedStr)return reversedStr;
						if(str){
							if(type == 'char'){
								newStr = str.split('');
								char = newStr.pop();
								reversedStr += char;
								newStr = newStr.join('');
							} else {
								newStr = str.split(' ');
								word = newStr.pop();
								reversedStr = reversedStr.split(' ');
								reversedStr.push(word);
								reversedStr = reversedStr.join(' ').trim();
								newStr = newStr.join(' ');
							}
							return recursiveReverse(newStr, type, reversedStr);
						}
					}
					return recursiveReverse(this, type);
				} catch(e){
					return Error(e)
				}
			}  
		},
		reverseInPlace: function(str){
			var arr = str.split(' ');
			return arr.map(function(el){
				return this.reverseMethods.reverse(el)
			}).join(' ');
		}
	},
	firstNonRepeatChar: function(str){
		var i, j,
			arr = str.split('').filter(function(el){return el != ' ';}),
			controller = {
				chars: {},
				handle: function(char, index){
					if(this['chars'][char]){
						this['chars'][char].increment();
						this['chars'][char].setIndex(index);
					} else {
						this['chars'][char] = this.create(index);
					}
				},
				create: function(index){
					return {
						lastIndex: index,
						occurences: 1,
						increment: function(){this.occurences++;},
						setIndex(index){this.lastIndex = index;}
					}
				}, 
				nonRepeatedChars: function(){
					var that = this;
					return Object.keys(this['chars']).filter(function(char){
						return that['chars'][char].occurences == 1;
					})
				},
				getFirst: function(arr){
					if(arr.length == 0){throw 'there are no unrepeated numbers in this string';}
					if(arr.length == 1)return arr[0];
					var indexMap = {};
					for(j=0;j<arr.length;j++){
						indexMap[this['chars'][arr[j]].lastIndex] = arr[j];
					}
					return indexMap[Object.keys(indexMap).sort()[0]]
				}


			};

			try {
				for(i=0; i<arr.length; i++){
					controller.handle(arr[i], i);
				}
				return controller.getFirst(controller.nonRepeatedChars());

			} catch(e){
				return Error(e)
			}

	},





};


var jsDude = {
	isPrime: function(n){
	  var divisor = 2;

	  while (n > divisor){
	    if(n % divisor == 0){
	     return false; 
	    }
	    else
	      divisor++;
	  }
	  return true;
	},
	fibonacci: function(n){
	  if(n<=1)
	    return n;
	  else
	    return fibonacci(n-1) + fibonacci (n-2);  
	},
	swap: function(x,y){
		console.log('before: x = ' + x + ', y = ' + y)
		x = x - y;
		y = x + y;
		x = y - x
		console.log('after: x = ' + x + ', y = ' + y)
	},
	mergeSortedArray: function(a, b){
	  var merged = [], 
	      aElm = a[0],
	      bElm = b[0],
	      i = 1,
	      j = 1;
	  if(a.length ==0)return b;
	  if(b.length ==0)return a;
	  while(aElm || bElm){
	   if((aElm && !bElm) || aElm < bElm){
	     merged.push(aElm);
	     aElm = a[i++];
	   }   
	   else {
	     merged.push(bElm);
	     bElm = b[j++];
	   }
	  }
	  return merged;
	},
	highestCommondivisor: function(a, b){
	   if(b == 0)
	     return a;
	   else 
	     return greatestCommonDivisor(b, a%b);
	},
	deDupe: function(arr){
	  var exists ={},
	      outArr = [], 
	      elm;

	  for(var i =0; i<arr.length; i++){
	    elm = arr[i];
	    if(!exists[elm]){
	      outArr.push(elm);
	      exists[elm] = true;
	   }
	  }
	  return outArr;
	},
	reverseMethods: {
		reverse: function(str){
		  var rtnStr = '';
		  for(var i = str.length-1; i>=0;i--){
		    rtnStr +=str[i];
		  }
		  return rtnStr;
		},
		recursiveReverse: function(str) {
		    if (str === "") {
		        return "";
		    } else {
		        return reverse(str.substr(1)) + str.charAt(0);
		    }
		},
		extendString: function(){
			String.prototype.reverse = function (){
			  if(!this || this.length <2) return this;
			  
			  return this.split('').reverse().join('');
			}
		},
		reverseWords: function(str){
			 var rev = [], 
			     wordLen = 0;
			 for(var i = str.length-1; i>=0; i--){
			   if(str[i]==' ' || i==0){
			     rev.push(str.substr(i,wordLen+1));
			     wordLen = 0;
			   }
			   else
			     wordLen++;
			 }
			 return rev.join(' ');
		},
		reverseInPlace: function(str){
		  return str.split(' ').reverse().join(' ').split('').reverse().join('');
		}
	},
	firstNonRepeatChar: function(str){
	  var len = str.length,
	      char, 
	      charCount = {};
	  for(var i =0; i<len; i++){
	    char = str[i];
	    if(charCount[char]){
	      charCount[char]++;
	    }
	    else
	      charCount[char] = 1;
	  }
	  for (var j in charCount){
	    if (charCount[j]==1)
	       return j;
	  }
	},  	
}