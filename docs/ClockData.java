package docs;
class Test{
    public static void main(String[] Args){
        EventDescription help = new EventDescription("event", 5, 59, 10, 59, "AM", "PM", "place");
        System.out.println(help.formatStart());
        System.out.println(help.formatEnd());
    }
}
class EventDescription{
    String description;
    int startTimeHours;
    int startTimeMins;
    int endTimeHours;
    int endTimeMins;
    String timeTypeStart;
    String timeTypeEnd;
    String eventType;
    public EventDescription(String d, int startH, int start, int endH, int end, String tTS, String tTE, String type){
        description = d;
        startTimeHours = startH;
        startTimeMins = start;
        endTimeHours = endH;
        endTimeMins = end;
        timeTypeStart = tTS;
        timeTypeEnd = tTE;
        eventType = type;
    }
    public String formatStart(){
        return startTimeHours + ":" + startTimeMins + " " + timeTypeStart;
    }
    public String formatEnd(){
        return endTimeHours + ":" + endTimeMins + " " + timeTypeEnd;
    }
    public String getDescription(){
        return description;
    }
}