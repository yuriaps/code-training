function nPqueens(N){
  let queens = []
  let count = 0

  backtrack(0)

  function backtrack(col) {

      if(col == N) {
          count++
      }

      let row = 0

      while(row < N){
          queens.push([row,col])

          if(isSafe(row,col)){
          
              backtrack(col+1)
              
          }

          queens.pop()

          row++

      }
  }

  function isSafe(row,col) {
      for (let i = 0; i < queens.length; i++){
          let r = queens[i][0]
          let c = queens[i][1]

          if(r == row && c == col){return true}

          else if (r == row) return false
          
          else if (Math.abs(row - r) == Math.abs(col - c)) return false
      };

  }

  console.log(count);
}

nPqueens(8)