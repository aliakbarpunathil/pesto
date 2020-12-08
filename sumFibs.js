<script>

function sumFibs(num) {
	var a = 1,b = 1, sum_odd = 0;
    if(num>0)
    	sum_odd = a;
    while(b<=num)
    {
    	if(b%2==1)
    		sum_odd = sum_odd + b;
    	b = a + b;
        a = b - a;
    }
  	return sum_odd;
}
document.write(sumFibs(75024));
</script>
