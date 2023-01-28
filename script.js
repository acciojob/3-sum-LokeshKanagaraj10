function threeSum(arr, target) {
	let i
	let j
	let k
	const mindiff = []
	for(i=0;i<arr.length;i++){
		for(j=i+1;j<arr.length;j++){
			for(k=j+1;k<arr.length;k++){
				let sum = arr[i]+arr[j]+arr[k]
				mindiff.push.Math.abs((sum - target))
			}
		}
	}
	let min = mindiff[0]
	let p
	for(p=1;p<mindiff.length;p++){
	  if(min > mindiff[p]){
	    min = mindiff[p]
	  }
	}
	return min
}

module.exports = threeSum;
