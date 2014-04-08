var arr = [{
	name:'millisecond',
	gap:1
},
{
	name:'second',
	gap:1000
},
{
	name:'minute',
	gap:60*1000
},
{
	name:'hour',
	gap:60*60*1000
},
{
	name:'day',
	gap:24*60*60*1000
},
{
	name:'week',
	gap:7*24*60*60*1000
},
{
	name:'month',
	gap:30*24*60*60*1000
},
{
	name:'year',
	gap:365.25*24*60*60*1000
}]

var resolutions = {};

arr.forEach(function(a){
	resolutions[a.name] = a.gap;
})

resolutions.resolve = function(gap){
	if(!gap || typeof(gap)!=='number'){
		throw new Error('gap needed')
	}
	var res = null;
	
	arr.forEach(function(a){

		if(gap>a.gap){
			res = a.name;
		}
	})
	return res;
}

module.exports = resolutions;