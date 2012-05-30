<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:marc="http://www.loc.gov/MARC21/slim" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="marc xs" version="1.0">
  <xsl:output indent="yes" omit-xml-declaration="yes" encoding="UTF-8"/>
  <xsl:strip-space elements="*" />

  <xsl:template match="node() | @*">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="marc:subfield[@code='9']"></xsl:template>
<!--
  <xsl:template match="marc:controlfield[@tag='001']"></xsl:template>
  <xsl:template match="marc:controlfield[@tag='003']"></xsl:template>
  <xsl:template match="marc:controlfield[@tag='005']"></xsl:template>
  <xsl:template match="marc:datafield[@tag='035']"></xsl:template>
-->
  <xsl:template match="marc:datafield[@tag='082']"></xsl:template>
  <xsl:template match="marc:datafield[@tag='090']"></xsl:template>
  <xsl:template match="marc:datafield[starts-with(@tag,'9')]"></xsl:template>
</xsl:stylesheet>
