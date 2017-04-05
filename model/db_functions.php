<?php
include_once 'dbconfig.php';
if(!empty($_GET))
{
    switch($_GET['action'])
    {
        case 'add':
            addRecord();
            break;
        case 'edit':
            editRecord($id);
            break;
        case 'delete':
            deleteRecord($id);
            break;
        default:

    }
}

function addRecord()
{
     $title = $_POST['title'];
    $author = $_POST['author'];
    try
    {
        $sql_query = "INSERT INTO users(title,author) VALUES($title,$author)";
        mysql_query($sql_query);
    }
    catch(Exception $e)
    {
        echo '<pre>';print_r($e);
        die;
    }
}

function editRecord($book_id)
{
    $title = $_POST['title'];
    $author = $_POST['author'];
    try
    {
        $sql_query = "UPDATE users set title='".$title."' and author='".$author."' where book_id=".$book_id.")";
        mysql_query($sql_query);
    }
    catch(Exception $e)
    {
        echo '<pre>';print_r($e);
        die;
    }
}

function deleteRecord($book_id)
{
    try
    {
        $sql_query = "DELETE from users where book_id=".$book_id;
        mysql_query($sql_query);
    }
    catch(Exception $e)
    {
        echo '<pre>';print_r($e);
        die;
    }
}
?>