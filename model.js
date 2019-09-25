
const N = 20;
const cellSize = 20;
const deadColor = "#000";
const liveColor = "#0F0"

let state = [];

for(let i = 0; i<N; i++){
		state.push([]);
		for(let j =0; j<N; j++){
			state[i][j] = 0;
		}
	}

function stateTransition() {
	let newState = [];
	for(let i = 0; i<N; i++){
		newState.push([]);
			for(let j =0; j<N; j++){
				if(count < 2 && count > 3) {
					newState[i][j] = 0;
				}
				
		}
	}

	for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
        	let count = counter(i, j);
        		if(count == 2 || count == 3) {
        			newState[i][j] = 1;
        	}

        }
    }

    state = newState;
}


function counter(i, j){
			let k=0;
			if(state[i - 1][j - 1] == 1) {
				k++;
			}
			else if(state[i - 1][j] == 1) {
				k++;
			}
			else if(state[i - 1][j + 1] == 1) {
				k++;
			}
			else if(state[i][j - 1] == 1) {
				k++;
			}
			else if(state[i][j + 1] == 1) {
				k++;
			}
			else if(state[i + 1][j - 1] == 1) {
				k++;
			}
			else if(state[i + 1][j]) {
				k++;
			}
			else if(state[i + 1][j + 1] == 1) {
				k++;
			}
			return k;
}


function startLife(){
	
}