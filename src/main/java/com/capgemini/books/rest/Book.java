package com.capgemini.books.rest;
//commit3
public class Book {
  private Long id;
  private String author;
  private String title;

  public Book(Long id, String author, String title) {
    this.id = id;
    this.author = author;
    this.title = title;
  }

  public Book() {
  }

  public Long getId() {
    return id;
  }

  public String getAuthor() {
    return author;
  }

  public String getTitle() {
    return title;
  }
}
