import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Student implements Comparable<Student>{
    String name;
    int age;
    double marks;
    Student(String name,int age,double marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    public String toString(){
        return "Name: "+name+" age: "+age+" marks: "+marks+"\n";
    }
    // sort by name in ascending order , if name is same then by marks(descendin) other-this 
    //then my age asend
    public int compareTo(Student other){
        int nameCompare=this.name.compareTo(other.name);
        if(nameCompare!=0){
            return nameCompare;
        }
        if(this.marks!=other.marks){
            return Double.compare(other.marks,this.marks);
            //return  other.marks-this.marks;
        }
        return this.age-other.age;
    }
    
}
class comparable_example{
     public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student("Amulya", 92, 4));
        students.add(new Student("Vish", 85, 3));
        students.add(new Student("Amulya", 91, 4));
        students.add(new Student("Amulya", 90, 1));
        students.add(new Student("Vish", 85, 1));

        Collections.sort(students);

        System.out.println("Sorted list:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}

// to comapre String => this.name.compareTo(other.name)=> asending
// Strings → use .compareTo()

// Integers / Doubles → use Integer.compare(x, y) or arithmetic difference

// Booleans → use Boolean.compare(a, b)