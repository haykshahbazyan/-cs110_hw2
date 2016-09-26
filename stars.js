<script>
const lines   = 5;
const space = function(n){
        if (n === 0){
          	return "";
        }
        return " " + space(n-1);
};
     const stars = function(n){
        if (n === 0){
          	return "";
        }
        return "*" + stars(n-1);
        };
    const gettriangle = function(n){
		if(n === 0){
        	return '';
            }
        return gettriangle(n-1) + "\n" + space(lines - n) + stars(2 * n -1);
        };

    console.log(gettriangle(lines));

  </script>
