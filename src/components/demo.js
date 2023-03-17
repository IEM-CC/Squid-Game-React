export const data = [
  {
    Question: "Check if a given number starts and ends with a 0 ",
    Options: [
      ` int main(){
          int n;
          printf("Enter first number: ");
          scanf("%d", &n);
          int d = n/10;
          int l = n%10;
          if(d!=1 && d!=2 && d!=3 && d!=4 
          && d!=5 && d!=6 && d!=7 && d!=8 
          && d!=9 && l != 0)
          printf(“true”);
        }`,
      `int main(){
          int n;
          printf("Enter first number: ");
          scanf("%d", &n);
          int d = n/10;
          int l = n%10;
          if(d!=1 && d!=2 && d!=3 && d!=4 
          && d!=5 && d!=6 && d!=7 
          && d!=8 && d!=9 && l == 0)
          printf(“true”);
        }`,
    ],
    Correct: 2,
  },
  {
    Question: `At Eden Gardens a cricket match is ongoing between IEM-CSE boys and IEM-ECE boys. IEM-CSE Boys are batting second and got a target of x runs. Currently, IEM-CSE boys have scored y runs. Determine how many runs IEM-CSE Boys should score to win the match.
    Example:
    INPUT: x = 200 , y = 50
    OUTPUT: 151
    `,
    Options: [
      `int main() {    

      int x,y;
      
      scanf("%d %d", &x, &y);
      printf(y-x+1);
      return 0;
  }
  `,
      `int main() {    

    int x,y;
    
    scanf("%d %d", &x, &y);
    printf(x-y+1);
    return 0;
}
`,
    ],
    Correct: 2,
  },
  {
    Question: "Program to find sum of first n natural numbers",
    Options: [
      `int main()
    {
        int n, count, sum = 0;
    
        printf("Enter the value of n");
        scanf("%d",&n);
       for(count=1; count <= n; count++){
            sum = sum + count;
        }
        printf("Sum of first %d 
        natural numbers is: %d",n, sum);

        return 0;
    }
    `,
      `int main()
    {
        int n, count, sum = 0;
    
        printf("Enter the value of n");
        scanf("%d",&n);
       for(count=0; count <= n; count++){
            sum = sum + count;
        }
  
        printf("Sum of first %d 
        natural numbers is: %d",n, sum);
        return 0;
    }
    `,
    ],
    Correct: 1,
  },
  {
    Question: `A program to print “COMING SOON” from the given set of array
    arr[]= [‘0’,‘A’,’a’,’B’,’b’,’C’,’c’,’D’,’d’,’E’,’e’,’F’,’f’,’G’,’g’,’H’,’h’,’I’,’I’,’J’,’j’,’K’,’k’,’L’,’l’,’M’,’m’,’N’,’n’,’O’,’o’,’P’,’p’,’Q’,’q’,’R’,’r’,’S’,’s’,’T’,’t’,’U’,’u’,’V’,’v’,’W’,’w’,’X’,’x’,’Y’,’y’,’Z’,’z’,’  ‘]
    `,
    Options: [
      `
    printf(arr[5]);
    printf(arr[29]);
    printf(arr[25]);
    printf(arr[17]);
    printf(arr[27]);
    printf(arr[13]);
    printf(arr[53]);
    printf(arr[37]);
    printf(arr[29]);
    printf(arr[29]);
    printf(arr[27]);
    `,
      `
    printf(arr[5]);
    printf(arr[29]);
    printf(arr[25]);
    printf(arr[17]);
    printf(arr[27]);
    printf(arr[13]);
    printf(arr[53]);
    printf(arr[36]);
    printf(arr[29]);
    printf(arr[29]);
    printf(arr[27]);

    `,
    ],
    Correct: 1,
    Answer: `
    ELEVATE 2023
    COMING SOON
`,
  },
  {
    Question: `A program to print the following pattern
    *
    **
    ***
    ****
    `,
    Options: [`int main() {
      int i, j;
      for (i = 1; i <= 4; ++i) {
        for (j = 1; j <= i; ++j) {
            printf("* ");
           }
        printf("\\n");
          }
      return 0;
 }
`, `int main() {
  int i, j;
 for (i = 1; i <= 4; ++i) {
     for (j = 1; j <= 4; ++j) {
        printf("* ");
     }
     printf("\\n");
  }
  return 0;
}
`],
    Correct: 1,
  },
  {
    Question: `Program to count number of digits in an Integer
    `,
    Options: [`int main() {
      long number, temp;
      int count = 0;
     temp = number;
    do {
        temp /= 10;
        ++count;
      } while (temp != 0);
    printf("Number of digits in the 
    number %ld is: %d", number,count);
    }
    
`, `int main() {
  long number, temp;
temp = number;
do {
    int count = 0;
    temp /= 10;
    ++count;
  } while (temp != 0);
printf("Number of digits in the 
number %ld is: %d", number,count);
  }
`],
    Correct: 1,
  },
  {
    Question: `Select the appropriate code that will swap the two numbers a and b: 
    Example:
                   INPUT:  a = 5, b = 3
    OUTPUT:  a = 3, b = 5
    
    INPUT:  a = 2, b = 3
    OUTPUT:  a = 3, b = 2
    `,
    Options: [`int main() {
      double first, second, temp;
      temp = first;
      first = temp;
      second = temp;
      printf("After swapping, 
          first number = %.2lf", first);
      printf("After swapping, 
          second number = %.2lf", second);
      return 0;
    }
    `, `int main() {
      double first, second, temp;
      temp = first;
      first = second;
      second = temp;
      printf("After swapping, 
          first number = %.2lf", first);
      printf("After swapping, 
          second number = %.2lf", second);
      return 0;
    }
    `],
    Correct: 2,
  },
  {
    Question: `Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
    Example: 
    INPUT: s = “Hello”
    OUTPUT: “hello”
    `,
    Options: [`string toLowerCase(string s) {
      for(int i=0;i<s.length();i++){
          if(s[i]>=’A’ && s[i]<=’Z’){
              s[i] = s[i]+32;
          }
      }
      return s;
}
`, `string toLowerCase(string s) {
  for(int i=0;i<s.length();i++){
      if(s[i]>=’A’ && s[i]<=’Z’){
          s[i] = s[i]-32;
      }
  }
  return s;
}
`],
    Correct: 1,
  },
];
