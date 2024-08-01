I saw this background on this website and tried to replicate it because i found it cool looking 

![Detective_box](https://github.com/user-attachments/assets/bf244147-62a8-46dd-9cc5-53321d946be4)

I thought at first that it'd be quite hard to make the same mechanics, but it's actually simple 
The thing is :
  - Some random dots that we draw at random positions and that move in random direction
  - Then we calculate the distance between each dots
  - If it's under the maxDistance then we calculate how far it is from the other point
  - Finally we adjust the opacity of the line (0 per default) depending on how close the dots are (the closer they are the more opacity for the line)

In the end we got this

![Dots_Moving](https://github.com/user-attachments/assets/e724d232-2345-4692-8978-93dbf0d301eb)

I also added the fact that we can make the dots move when the mouse is around

![Dots_Moving_Mouse](https://github.com/user-attachments/assets/4a1a31c6-029c-49c5-b744-bfaee583ed81)
