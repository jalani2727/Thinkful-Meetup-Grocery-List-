$(function() {

// Step 1
// This code is executed when someone clicks the "Add Item" button 
// at the top right of the shopping-item
// -------------------
	$(".add-item").on('click', function(event) {
        event.preventDefault();
        var listItem = $(".item-input").val();
        var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
        console.log(listItem.length)
        if (listItem.length==0 || listItem==" ") {
            alert("Please enter an item!")
        } else {
        

        $(".shopping-list").append(itemHtml); 
        console.log($("li").length) 
        $(".item-input").val("");}

        $('p').text($("li").length)
    
	});
// -------------------


// Step 2
// -------------------
// This code is executed when someone clicks the "X" button
// at the top right of the shopping-item
	$(".shopping-list").on('click', '.item-remove', function(event) {
        console.log(event)
        // Use the .parent() method because you're clicking an item (the x) that is nested in the list item. You want to remove the list item (the parent)
        $(event.currentTarget).parent().remove()
      
	});
// -------------------
  
// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      $(event.currentTarget).addClass("complete")
	});
// -------------------

//Additional Challenges
//If you add an item with no text, it adds a blank box. This is a bug! Fix it.
// Make a prompt appear that warns the user that what they typed is invalid 
// done

//Add a counter that tells the user how many items are in your shopping list

// done

  
});