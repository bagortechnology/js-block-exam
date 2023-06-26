function solution(blocks) {
    const N = blocks.length;
    let maxDistance = 0;
  
    for (let i = 0; i < N; i++) {
      let left = i;
      let right = i;
  
      // Move the right pointer to find a lower block
      while (right + 1 < N && blocks[right + 1] >= blocks[right]) {
        right++;
      }
  
      // Move the left pointer and find the maximum distance
      for (let j = i; j >= 0; j--) {
        if (blocks[j] >= blocks[i]) {
          left = j;
        } else {
          break;
        }
      }
  
      maxDistance = Math.max(maxDistance, right - left + 1);
    }
  
    return maxDistance;
  }
  
  
// Test Cases
function testSolution() {
    let blocks, expected, result;
  
    // Test case 1
    blocks = [2, 6, 8, 5];
    expected = 3;
    result = solution(blocks);
    console.log(`Test case 1: ${result === expected ? 'Passed' : 'Failed'}`);
  
    // Test case 2
    blocks = [1, 5, 5, 2, 6];
    expected = 4;
    result = solution(blocks);
    console.log(`Test case 2: ${result === expected ? 'Passed' : 'Failed'}`);
  }
  
  testSolution();
  
  