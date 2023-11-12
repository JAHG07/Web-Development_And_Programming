public class DVD {
    public String name;
    public int releaseYear;
    public String director;

    public DVD(String name, int releaseYear, String director) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.director = director;
    }

    public String toString() {
        return this.name + ", directed by " + this.director + ", released in " + this.releaseYear;
    }

    public static void main(String[] args){
        DVD[] dvdCollection = new DVD[15];

        DVD avengersDVD0 = new DVD("The avengers",2012,"Joss Whedon");
        DVD avengersDVD1 = new DVD("Kimetsu",2020,"Algun autor");
        DVD avengersDVD2 = new DVD("Otro",2023,"otro autor");

        dvdCollection[0] = avengersDVD0;
        dvdCollection[1] = avengersDVD0;
        dvdCollection[2] = avengersDVD0;

        System.out.println(dvdCollection[0]);
        System.out.println(dvdCollection[1]);
        System.out.println(dvdCollection[3]);
        // Arrays Capacity
        int capacity = dvdCollection.length;
        System.out.println(capacity);
        // Array length
        // Create a new array with a capacity of 6.
        int[] array = new int[6];
        int length = 0;
        for (int i = 0; i < 3; i++) {
            array[i] = i * i;
            length++;
        }

        System.out.println("The Array has a capacity of " + array.length);
        System.out.println("The Array has a length of " + length);

    }
}