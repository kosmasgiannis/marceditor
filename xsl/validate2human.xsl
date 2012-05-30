<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xs" version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema">
	<xsl:output method="xml" encoding="UTF-8"/>

        <xsl:template match="/validationReport">
	<validate2human>
		<xsl:apply-templates select="error"/>
		<xsl:apply-templates select="warning"/>
	</validate2human>
        </xsl:template>


	<xsl:template match="error">
           <error>
	   <xsl:text>Error in field </xsl:text><xsl:value-of select="tag"/><xsl:text>, </xsl:text>
	   <xsl:choose>
	     <xsl:when test="@type='InvalidIndicator'">
	        <xsl:if test="ind1">
	          <xsl:text>invalid first indicator : '</xsl:text><xsl:value-of select="ind1"/><xsl:text>'</xsl:text>
	        </xsl:if>
	        <xsl:if test="ind2">
	          <xsl:text>invalid second indicator : '</xsl:text><xsl:value-of select="ind2"/><xsl:text>'</xsl:text>
	        </xsl:if>
	     </xsl:when>
	     <xsl:when test="@type='InvalidSubfieldCode'">
	        <xsl:text>invalid Subfield Code : '</xsl:text><xsl:value-of select="code"/><xsl:text>'</xsl:text>
	     </xsl:when>
	     <xsl:when test="@type='NonRepeatable'">
	        <xsl:text>is repeated but is not repeatable</xsl:text>
	     </xsl:when>
	     <xsl:when test="@type='MandatoryNonRepeatable'">
	        <xsl:text>either is mandatory and does not exist or is repeated but is not repeatable</xsl:text>
	     </xsl:when>
	     <xsl:when test="@type='NonRepeatableSubField'">
	        <xsl:text>subfield '</xsl:text><xsl:value-of select="code"/><xsl:text>' is repeated but is not repeatable</xsl:text>
	     </xsl:when>
	     <xsl:when test="@type='NoMainHeading'">
	        <xsl:text>Main Heading is missing.</xsl:text>
	     </xsl:when>
	     <xsl:otherwise>
	     </xsl:otherwise>
	   </xsl:choose>
	   <xsl:text>.</xsl:text>
           </error>
	   <xsl:text>&#10;</xsl:text>
	</xsl:template>

	<xsl:template match="warning">
           <warning>
	   <xsl:choose>
	     <xsl:when test="@type='MandatoryTag'">
	        <xsl:text>Mandatory Tag : </xsl:text><xsl:value-of select="tag"/>
	     </xsl:when>
	     <xsl:when test="@type='ObsoleteTag'">
	        <xsl:text>Obsolete Tag : </xsl:text><xsl:value-of select="tag"/>
	     </xsl:when>
	     <xsl:when test="@type='UnknownTag'">
	        <xsl:text>Unknown Tag : </xsl:text><xsl:value-of select="tag"/>
	     </xsl:when>
	     <xsl:otherwise>
	     </xsl:otherwise>
	   </xsl:choose>
	   <xsl:text>.</xsl:text>
           </warning>
	   <xsl:text>&#10;</xsl:text>
	</xsl:template>

</xsl:stylesheet>
