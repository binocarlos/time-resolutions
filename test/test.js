var resolutions = require('../');

describe('time-resolutions', function(){

  it('resolve should be a function', function() {
    resolutions.resolve.should.be.a('function');
  })

  it('should throw with bad args', function() {

  	(function(){
  		var res = resolutions.resolve();
		}).should.throw();

		(function(){
  		var res = resolutions.resolve('dff');
		}).should.throw();

  })

  describe('resolutions', function(){

	  it('millisecond', function() {

	  	var res = resolutions.resolve(150);

	  	res.should.equal('millisecond');
	    
	  })

	  it('second', function() {
	    
	    var start = new Date('05/06/2014 11:46:12');
	    var end = new Date('05/06/2014 11:46:45');

	    var res = resolutions.resolve(end.getTime()-start.getTime());
	  	res.should.equal('second');
	  })

	  it('minute', function() {
	    
	    var start = new Date('05/06/2014 11:46:12');
	    var end = new Date('05/06/2014 11:58:42');
	    var res = resolutions.resolve(end.getTime()-start.getTime());
	  	res.should.equal('minute');
	  })

	  it('hour', function() {

	  	var start = new Date('05/06/2014 11:16:45');
	    var end = new Date('05/06/2014 14:46:45');
	    var res = resolutions.resolve(end.getTime()-start.getTime());
	  	res.should.equal('hour');

	  })

	  it('day', function() {

	  	var start = new Date('05/06/2014 06:16:45');
	    var end = new Date('05/07/2014 18:16:45');
	    var res = resolutions.resolve(end.getTime()-start.getTime());
	  	res.should.equal('day');
	  })


	})

})
