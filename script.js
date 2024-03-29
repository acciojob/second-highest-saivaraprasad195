function secondHighest(arr) {
			let n = arr.length;
			
			if(n == 0 || n == 1) return Number.NEGATIVE_INFINITY;

			if(n == 2) {
				if(arr[0] > arr[1]) return arr[1];
					
				else if(arr[0] == arr[1]) return Number.NEGATIVE_INFINITY;

				return arr[0];
			}
	
			let fg = arr[0];
			let sg =Number.NEGATIVE_INFINITY;
	
			for(let i=1;i<n;i++){
				if(arr[i]>fg){
					sg=fg;
					fg=arr[i];
					
				}
				else if(arr[i] > sg){
					sg=arr[i];
				}
			}
			return sg;
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			let result = secondHighest(arr);
			let header = document.getElementById("h1");
			header.innerText = `${result}`;
		}

		Main();
