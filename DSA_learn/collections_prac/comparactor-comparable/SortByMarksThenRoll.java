import java.util.*;

class Student {
    int roll;
    int marks;
    Student(int roll, int marks) {
        this.roll = roll;
        this.marks = marks;
    }
    public String toString() {
        return "Roll:" + roll + " Marks:" + marks;
    }
}

public class SortByMarksThenRoll {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
                new Student(3, 80),
                new Student(1, 95),
                new Student(2, 80),
                new Student(4, 60)
        );

        students.sort(Comparator.comparingInt((Student s)->s.marks)
                                .reversed()
                                .thenComparingInt((Student s)->s.roll));

        for (Student s : students) {
            System.out.println(s);
            }
    }
}
