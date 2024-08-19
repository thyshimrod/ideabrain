---
up:
  - "[[Efforts]]"
---




> [!Castleo]+ ### 🔥 On
> > ``` dataview
> > TABLE WITHOUT ID
>  > file.link as "",
>  > rank as "Rank"
> > FROM "Efforts/Explorations"
> >  WHERE type = [[Exploration]]
> > SORT rank desc
> > ```
> 

> [!Training]+ ### ♻  OnGoing
> > ``` dataview
> > TABLE WITHOUT ID
>  > file.link as "",
>  > rank as "Rank"
> > FROM "Efforts/OnGoing"
> >  WHERE type = [[Exploration]]
> > SORT rank desc
> > ```

> [!Network]+ ### 🚀  Done
> > ``` dataview
> > TABLE WITHOUT ID
>  > file.link as "",
>  > rank as "Rank"
> > FROM "Efforts/Zdone"
> >  WHERE type = [[Exploration]]
> > SORT rank desc
> > ```


