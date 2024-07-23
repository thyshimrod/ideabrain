---
obsidianUIMode: preview
---
Your launchpad and home base. That's here. That's **home**.

> [!Map]- # Atlas
> > ``` dataview
> > TABLE WITHOUT ID
>  > file.link as ""
>  >
> > FROM "Atlas/Maps"
> > where contains(tags,"mymaps")
> > 
> > ```



> [!Calendar]- # Calendar
> > *What's on your mind?* 
> 
> - To journal, focus your day, or to capture a spark, hit `Cmd-d` or `Ctrl-d`.
> - To capture specific type of things, go to [[Logs (Example)|Logs]].
>   
> ![[robert-mccall-space-ship-launch-narrower.png|400]]
> - To broadly reflect, go to [[Plan and Review]].
> - To learn more about time travel, go to [[Calendar]].

> [!Training]- # Efforts
> > *What can you work on?* 
> 
> For a concentrated view, go to [[Efforts]].
> 
> Use this to keep priorities in order and the quickly adjust your bandwidth as needed. 
> 
> > [!Box]+ ### 🔥 On
> > ``` dataview
> > TABLE WITHOUT ID
>  > file.link as "",
>  > rank as "Rank"
> > FROM "Efforts/On"
> > SORT rank desc
> > ```
> 
> > [!Box]+ ### ♻️ Ongoing
> > ``` dataview
> > TABLE WITHOUT ID
> > file.link as "",
> > rank as "Rank"
> > FROM "Efforts/Ongoing"
> > SORT rank desc
> > ```
> 
> > [!Box]- ### 〰️ Simmering
> > Efforts can easily move from `on` to `simmering` in the background.
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> > file.link as "",
> > rank as "Rank"
> > FROM "Efforts/Simmering"
> > SORT rank desc
> > ```
> 
> > [!Box]- ### 🚀 ZDone
> > Efforts Done
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> > file.link as "",
> > rank as "Rank"
> > FROM "Efforts/ZDone"
> > SORT rank desc
> > ```



> ![[robert-mccall-black-hole-concept-art copy.jpg|400]]

![[pale-blue-dot-banner.jpg]]



