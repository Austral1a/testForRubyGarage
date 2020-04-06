1) get all statuses, not repeating, alphabetically ordered
<pre>
SELECT DISTINCT status FROM tasks
ORDER BY status;
</pre>
2) get the count of all tasks in each project, order by tasks count !!!!
descending
<pre>
SELECT COUNT(project_id)
FROM tasks
ORDER BY project_id DESC
</pre>
3) get the count of all tasks in each project, order by projects !!!!!!
names
<pre>
SELECT COUNT(project_id)
FROM tasks
ORDER BY projects.name 
</pre>
4) get the tasks for all projects having the name beginning with
"N" letter
<pre>
SELECT name
FROM tasks
WHERE name LIKE 'N%'
</pre>
5) get the list of all projects containing the 'a' letter in the middle of
the name, and show the tasks count near each project. Mention
that there can exist projects without tasks and tasks with
project_id = NULL
<pre>
SELECT SUBSTRING(name, LEN(name)/2.0,1)
FROM projects
WHERE name='a'
UNION
SELECT IFNULL(project_id, 0)
FROM task;
</pre>
6) get the list of tasks with duplicate names. Order alphabetically
<pre>
SELECT id, name, status, project_id
FROM tasks
ORDER BY name;
</pre>
7) get list of tasks having several exact matches of both name and
status, from the project 'Garage'. Order by matches count
<pre>
SELECT tasks.name, projects.id
FROM tasks, projects
WHERE tasks.project_id = projects.id
AND projects.name = "Garage"
GROUP BY tasks.name, status
HAVING COUNT(tasks.name AND tasks.status) > 1;
</pre>
8) get the list of project names having more than 10 tasks in status
'completed'. Order by project_id
<pre>
SELECT projects.name, projects.id, tasks.project_id, tasks.status
FROM projects, tasks
GROUP BY projects.name
HAVING COUNT(tasks.status = 'completed') > 10
ORDER BY tasks.project_id
